
import { useState } from "react";
import FormField from "./FormField";

function RegistraciinaForma({title}){
    const [forma,setForma]=useState({name: "", email: "", password: "", pidtverdPassword: "", dataNarodzh: ""});

    function handleChange(event){
        const {name,value}=event.target;
        setForma({
            ...forma,
            [name]: value
        });
    }

    function handleSubmit(event){
        event.preventDefault();
        if(forma.name.trim().length<2){
            alert("Ім'я повинно мати мінімум 2 символа");
            return;
        }
        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(forma.email)){
            alert("Не правильно введено емейл");
        }
        if(forma.password.length<8){
            alert("Пароль має бути мінімум з 8 символів");
        }
        if(forma.password!==forma.pidtverdPassword){
            alert("Паролі не співпадають");
            return;
        }
        if(forma.dataNarodzh>new Date().toLocaleDateString("uk-UA")){
            alert("Дата народження не може бути в майбутньому часі");
            return;
        }
        alert("Ти зареєструвався, я тебе вітаю!!!");
    }

    return(<section>
        <h2>{title}</h2>

        <form onSubmit={handleSubmit}>
            <FormField label="Ім'я" name="name" value={forma.name} onChange={handleChange}/>
            <FormField label="e-mail" name="email" type="email" value={forma.email} onChange={handleChange}/>
            <FormField label="Парольчик" name="password" type="password" value={forma.password} onChange={handleChange}/>
            <FormField label="Підтвердження парольчика" name="pidtverdPassword" type="password" value={forma.pidtverdPassword} onChange={handleChange}/>
            <FormField label="ДН" name="dataNarodzh" type="date" value={forma.dataNarodzh} onChange={handleChange}/>
            <button type="submit">Зареєструватись</button>
        </form>
    </section>
    );
}

export default RegistraciinaForma;
