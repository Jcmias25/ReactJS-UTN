import '../App.css';


function Register() {

    return (

        <div className='container'>
            <form className='formulario'>

                <div className = 'cajita'>
                    <label>Nombre</label>
                    <input />
                </div>

                <div className = 'cajita'>
                    <label>Apellido</label>
                    <input />
                </div>

                <div className = 'cajita'>
                    <label>Email</label>
                    <input />
                </div>

                <div className = 'cajita'>
                    <label>Télefono</label>
                    <input />
                </div>

                <div className = 'cajita'>
                    <label>Contraseña</label>
                    <input />
                </div>

                <div className = 'cajita'>
                    <label>Confirme su contraseña</label>
                    <input />
                </div>

                <div className = 'linea'></div>

                <button type="submit">Registrarme</button>



            </form>
        </div>


    );
}

export default Register;