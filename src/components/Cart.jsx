
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { formatPrice } from '../data'
import {
  Backdrop,
  SidePanel,
  CartItem,
  Remove,
  Total,
  Form,
  TwoColumns,
  ButtonStack,
  Message,
  Empty,
  Button,
} from '../styles/components'

function Cart({
  step,
  setStep,
  cart,
  onRemove,
  total,
  onClose,
  address,
  setAddress,
  onComplete,
}) {
  const [payment, setPayment] = useState({
    name: '',
    number: '',
    cvv: '',
    month: '',
    year: '',
  })

  const [errors, setErrors] = useState('')
  const navigate = useNavigate()

  const updateAddress = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value })
  }

  const updatePayment = (e) => {
    setPayment({ ...payment, [e.target.name]: e.target.value })
  }

  const submitDelivery = (e) => {
    e.preventDefault()

    if (
      !address.name.trim() ||
      !address.address.trim() ||
      !address.city.trim() ||
      !address.cep.trim() ||
      !address.number.trim()
    ) {
      setErrors('Preencha os campos obrigatórios para continuar.')
      return
    }

    setErrors('')
    setStep('payment')
  }

  const submitPayment = (e) => {
    e.preventDefault()

    if (
      !payment.name.trim() ||
      payment.number.replace(/\D/g, '').length < 12 ||
      payment.cvv.replace(/\D/g, '').length < 3 ||
      !payment.month ||
      !payment.year
    ) {
      setErrors(
        'Preencha os dados do cartão com informações fictícias válidas para o teste.',
      )
      return
    }

    setErrors('')
    onComplete()
    setStep('confirmation')
  }

  return (
    <Backdrop onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <SidePanel
        role="dialog"
        aria-modal="true"
        aria-label="Finalização do pedido"
      >
        {step === 'cart' && (
          <>
            <h2>Seu carrinho</h2>

            {cart.length === 0 ? (
              <Empty>
                Seu carrinho está vazio.
                <br />
                Adicione um prato para continuar.
              </Empty>
            ) : (
              cart.map((item, index) => (
                <CartItem key={`${item.id}-${index}`}>
                  <img src={item.image} alt="" />

                  <div>
                    <strong>{item.name}</strong>
                    <span>{formatPrice(item.price)}</span>
                  </div>

                  <Remove
                    onClick={() => onRemove(index)}
                    aria-label={`Remover ${item.name}`}
                  >
                    ×
                  </Remove>
                </CartItem>
              ))
            )}

            <Total>
              <span>Valor total</span>
              <span>{formatPrice(total)}</span>
            </Total>

            <ButtonStack>
              <Button
                $light
                $full
                disabled={!cart.length}
                onClick={() => {
                  setStep('delivery')
                  setErrors('')
                }}
              >
                Continuar com a entrega
              </Button>

              <Button $light $full onClick={onClose}>
                Continuar comprando
              </Button>
            </ButtonStack>
          </>
        )}

        {step === 'delivery' && (
          <>
            <h2>Entrega</h2>

            <Form onSubmit={submitDelivery}>
              <label>
                Quem irá receber
                <input
                  name="name"
                  value={address.name}
                  onChange={updateAddress}
                  autoComplete="name"
                  required
                />
              </label>

              <label>
                Endereço
                <input
                  name="address"
                  value={address.address}
                  onChange={updateAddress}
                  autoComplete="street-address"
                  required
                />
              </label>

              <label>
                Cidade
                <input
                  name="city"
                  value={address.city}
                  onChange={updateAddress}
                  autoComplete="address-level2"
                  required
                />
              </label>

              <TwoColumns>
                <label>
                  CEP
                  <input
                    name="cep"
                    value={address.cep}
                    onChange={updateAddress}
                    autoComplete="postal-code"
                    required
                  />
                </label>

                <label>
                  Número
                  <input
                    name="number"
                    value={address.number}
                    onChange={updateAddress}
                    required
                  />
                </label>
              </TwoColumns>

              <label>
                Complemento (opcional)
                <input
                  name="complement"
                  value={address.complement}
                  onChange={updateAddress}
                />
              </label>

              {errors && <Message role="alert">{errors}</Message>}

              <ButtonStack>
                <Button $light $full type="submit">
                  Continuar com o pagamento
                </Button>

                <Button
                  $light
                  $full
                  type="button"
                  onClick={() => {
                    setStep('cart')
                    setErrors('')
                  }}
                >
                  Voltar para o carrinho
                </Button>
              </ButtonStack>
            </Form>
          </>
        )}

        {step === 'payment' && (
          <>
            <h2>Pagamento — Valor a pagar {formatPrice(total)}</h2>

            <Form onSubmit={submitPayment}>
              <label>
                Nome no cartão
                <input
                  name="name"
                  value={payment.name}
                  onChange={updatePayment}
                  autoComplete="cc-name"
                  required
                />
              </label>

              <label>
                Número do cartão
                <input
                  name="number"
                  value={payment.number}
                  onChange={updatePayment}
                  inputMode="numeric"
                  autoComplete="cc-number"
                  placeholder="Somente dados fictícios"
                  required
                />
              </label>

              <TwoColumns>
                <label>
                  CVV
                  <input
                    name="cvv"
                    value={payment.cvv}
                    onChange={updatePayment}
                    inputMode="numeric"
                    autoComplete="cc-csc"
                    required
                  />
                </label>

                <label>
                  Mês de vencimento
                  <input
                    name="month"
                    value={payment.month}
                    onChange={updatePayment}
                    inputMode="numeric"
                    placeholder="MM"
                    required
                  />
                </label>
              </TwoColumns>

              <label>
                Ano de vencimento
                <input
                  name="year"
                  value={payment.year}
                  onChange={updatePayment}
                  inputMode="numeric"
                  placeholder="AAAA"
                  required
                />
              </label>

              {errors && <Message role="alert">{errors}</Message>}

              <ButtonStack>
                <Button $light $full type="submit">
                  Finalizar pagamento
                </Button>

                <Button
                  $light
                  $full
                  type="button"
                  onClick={() => {
                    setStep('delivery')
                    setErrors('')
                  }}
                >
                  Voltar para a edição de endereço
                </Button>
              </ButtonStack>
            </Form>

            <Message>
              Esta é uma simulação visual. Nenhum pagamento real será
              processado.
            </Message>
          </>
        )}

        {step === 'confirmation' && (
          <>
            <h2>Pedido realizado — {onComplete.orderId || 'EF-2026'}</h2>

            <Message>
              Estamos felizes em informar que seu pedido já está em processo
              de preparação e, em breve, será entregue no endereço fornecido.
            </Message>

            <Message>
              Nossos entregadores não estão autorizados a realizar cobranças
              extras. Higienize as mãos após receber seu pedido.
            </Message>

            <Message>
              Esperamos que desfrute de uma deliciosa experiência
              gastronômica. Bom apetite!
            </Message>

            <Button
              $light
              $full
              onClick={() => {
                onClose()
                navigate('/')
              }}
            >
              Concluir
            </Button>
          </>
        )}
      </SidePanel>
    </Backdrop>
  )
}

export default Cart
