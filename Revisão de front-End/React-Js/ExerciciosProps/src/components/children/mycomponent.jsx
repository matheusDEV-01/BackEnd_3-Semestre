import "./mycomponent.css"

const MyComponent = (props) => {
    return (
        <div className="container">
            {props.children} // A prop children é uma propriedade especial do React que permite que um componente receba elementos filhos. Ela é usada para renderizar o conteúdo que está dentro do componente pai. Por exemplo, se você tiver um componente MyComponent e quiser passar outros componentes ou elementos HTML como filhos, você pode usar a prop children para renderizá-los dentro do MyComponent. Isso é útil para criar componentes reutilizáveis e flexíveis, permitindo que eles sejam usados em diferentes contextos com diferentes conteúdos.
        </div>
    )

}

export default MyComponent
        