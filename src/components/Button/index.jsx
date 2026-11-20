import { ButtonContainer, ButtonLink } from './styles'

function Button({ type = 'button', to, onClick, variant = 'primary', children, title }) {
  if (to) {
    return (
      <ButtonLink to={to} title={title} $variant={variant}>
        {children}
      </ButtonLink>
    )
  }

  return (
    <ButtonContainer type={type} onClick={onClick} title={title} $variant={variant}>
      {children}
    </ButtonContainer>
  )
}

export default Button
