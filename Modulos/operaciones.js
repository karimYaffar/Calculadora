
const Suma = (v1, v2) => v1 + v2;

const resta =(v1,v2) => v1-v2;

const multi =(v1,v2) => v1*v2;

const div =(v1, v2) => {
    if (v2 < 0 )
        return "Operaciones no valida";
    else 
    {
        return v1 /v2;
    }
}


