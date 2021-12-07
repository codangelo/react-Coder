import { useCartContext } from '../CartContext/CartContext'
import './form.css'
import { Button } from 'react-bootstrap';

const UserForm = ({ createOrder }) => {

    const { handleForm, userData } = useCartContext();

    return (
        <form onChange={handleForm} onSubmit={(e) => {
            e.preventDefault()

            userData.email === userData.emailvalidation ? createOrder() : alert("El correo electronico ingresado no coincide con el de validación, por favor ingresalo nuevamente")
        }
        }>
            <legend className="formTitulo">Ingresa tus datos</legend>
            <div>
                <label htmlFor="name" className="formDato">Nombre</label>
                <input type="text" name="name" placeholder="Ingresa tu nombre" defaultValue={userData.name} />
            </div>
            <div>
                <label htmlFor="surname" className="formDato">Apellido</label>
                <input type="text" name="surname" placeholder="Ingresa tu apellido" defaultValue={userData.surname} />
            </div>
            <div>
                <label htmlFor="phone" className="formDato">Teléfono</label>
                <input type="text" name="phone" placeholder="Ingresa tu teléfono" defaultValue={userData.phone} />
            </div>
            <div>
                <label htmlFor="email" className="formDato">E-mail</label>
                <input type="email" name="email" placeholder="Ingresa tu mail" defaultValue={userData.email} />
            </div>
            <div>
                <label htmlFor="emailvalidation" className="formDato">Validá tu E-mail</label>
                <input type="email" name="emailvalidation" placeholder="Repetí tu mail" defaultValue={userData.emailvalidation} required />
            </div>

            <Button type="submit" className="comprar">Comprar</Button>
        </form>
    )
}

export default UserForm
