import { useCartContext } from '../CartContext/CartContext'

const UserForm = ({createOrder}) =>{

    const {handleForm, userData} = useCartContext();

    return (
        <form onChange={handleForm} onSubmit={createOrder}>
            <legend className="form-title">Ingresa tus datos</legend>
            <div>
                <label htmlFor="name" className="form-label">Nombre</label>
                <input type="text" name="name" placeholder="Ingresa tu nombre" defaultValue={userData.name}/>
            </div>
            <div>
                <label htmlFor="surname" className="form-label">Apellido</label>
                <input type="text" name="surname" placeholder="Ingresa tu apellido" defaultValue={userData.surname}/>
            </div>
            <div>
                <label htmlFor="phone" className="form-label">Teléfono</label>
                <input type="text" name="phone" placeholder="Ingresa tu teléfono" defaultValue={userData.phone}/> 
                <p>Ingresá tu número de teléfono
                </p>
            </div>
            <div>
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" name="email" placeholder="Ingresa tu mail" defaultValue={userData.email}/>
            </div>
            <button className="buy-buttom">¡Comprar!</button>
        </form>
    )
}

export default UserForm
