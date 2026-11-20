import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { formatPrice } from '../../data'
import Button from '../Button'
import {
  Backdrop,
  Sidebar,
  Heading,
  Item,
  Remove,
  Total,
  Form,
  Row,
  Buttons,
  Message,
} from './styles'

function Cart({ step, setStep, cart, onRemove, total, onClose, address, setAddress, onComplete, orderId }) {
  const [payment, setPayment] = useState({ name: '', number: '', cvv: '', month: '', year: '' })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const goTo = (next) => {
    setError('')
    setStep(next)
  }

  const updateAddress = (e) => setAddress({ ...address, [e.target.name]: e.target.value })
  const updatePayment = (e) => setPayment({ ...payment, [e.target.name]: e.target.value })

  const submitDelivery = (e) => {
    e.preventDefault()
    const required = ['name', 'address', 'city', 'cep', 'number']
    if (required.some((field) => !address[field].trim())) {
      setError('Preencha os campos obrigatórios para continuar.')
      return
    }
    goTo('payment')
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
      setError('Preencha os dados do cartão (use dados fictícios).')
      return
    }
    onComplete()
    goTo('confirmation')
  }

  return (
    <Backdrop onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <Sidebar role="dialog" aria-modal="true" aria-label="Carrinho">
        {step === 'cart' && (
          <>
            {cart.length === 0 ? (
              <Message>O carrinho está vazio. Adicione um prato para continuar.</Message>
            ) : (
              <ul>
                {cart.map((item, index) => (
                  <Item key={`${item.id}-${index}`}>
                    <img src={item.image} alt={item.name} />
                    <div>
                      <h4>{item.name}</h4>
                      <span>{formatPrice(item.price)}</span>
                    </div>
                    <Remove type="button" onClick={() => onRemove(index)} aria-label={`Remover ${item.name}`}>
                      🗑
                    </Remove>
                  </Item>
                ))}
              </ul>
            )}
            <Total>
              <span>Valor total</span>
              <span>{formatPrice(total)}</span>
            </Total>
            {cart.length > 0 && (
              <Button variant="secondary" onClick={() => goTo('delivery')}>
                Continuar com a entrega
              </Button>
            )}
          </>
        )}

        {step === 'delivery' && (
          <Form onSubmit={submitDelivery}>
            <Heading>Entrega</Heading>
            <label>
              Quem irá receber
              <input name="name" value={address.name} onChange={updateAddress} />
            </label>
            <label>
              Endereço
              <input name="address" value={address.address} onChange={updateAddress} />
            </label>
            <label>
              Cidade
              <input name="city" value={address.city} onChange={updateAddress} />
            </label>
            <Row>
              <label>
                CEP
                <input name="cep" value={address.cep} onChange={updateAddress} />
              </label>
              <label>
                Número
                <input name="number" value={address.number} onChange={updateAddress} />
              </label>
            </Row>
            <label>
              Complemento (opcional)
              <input name="complement" value={address.complement} onChange={updateAddress} />
            </label>
            {error && <Message role="alert">{error}</Message>}
            <Buttons>
              <Button type="submit" variant="secondary">
                Continuar com o pagamento
              </Button>
              <Button variant="secondary" onClick={() => goTo('cart')}>
                Voltar para o carrinho
              </Button>
            </Buttons>
          </Form>
        )}

        {step === 'payment' && (
          <Form onSubmit={submitPayment}>
            <Heading>Pagamento - Valor a pagar {formatPrice(total)}</Heading>
            <label>
              Nome no cartão
              <input name="name" value={payment.name} onChange={updatePayment} />
            </label>
            <Row style={{ gridTemplateColumns: '2fr 1fr' }}>
              <label>
                Número do cartão
                <input name="number" value={payment.number} onChange={updatePayment} inputMode="numeric" />
              </label>
              <label>
                CVV
                <input name="cvv" value={payment.cvv} onChange={updatePayment} inputMode="numeric" />
              </label>
            </Row>
            <Row>
              <label>
                Mês de vencimento
                <input name="month" value={payment.month} onChange={updatePayment} inputMode="numeric" />
              </label>
              <label>
                Ano de vencimento
                <input name="year" value={payment.year} onChange={updatePayment} inputMode="numeric" />
              </label>
            </Row>
            {error && <Message role="alert">{error}</Message>}
            <Buttons>
              <Button type="submit" variant="secondary">
                Finalizar pagamento
              </Button>
              <Button variant="secondary" onClick={() => goTo('delivery')}>
                Voltar para a edição de endereço
              </Button>
            </Buttons>
          </Form>
        )}

        {step === 'confirmation' && (
          <>
            <Heading>Pedido realizado - {orderId}</Heading>
            <Message>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </Message>
            <Message>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </Message>
            <Message>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </Message>
            <Message>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </Message>
            <Button
              variant="secondary"
              onClick={() => {
                goTo('cart')
                onClose()
                navigate('/')
              }}
            >
              Concluir
            </Button>
          </>
        )}
      </Sidebar>
    </Backdrop>
  )
}

export default Cart
