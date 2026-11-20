import { formatPrice } from '../../data'
import Button from '../Button'
import { Overlay, ModalContent, CloseButton, Title, Text } from './styles'

function ProductModal({ dish, onClose, onAdd }) {
  if (!dish) return null

  return (
    <Overlay onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <ModalContent role="dialog" aria-modal="true" aria-label={dish.name}>
        <CloseButton type="button" onClick={onClose} aria-label="Fechar">
          ×
        </CloseButton>
        <img src={dish.image} alt={dish.name} />
        <div>
          <Title>{dish.name}</Title>
          <Text>{dish.description}</Text>
          <Text>{dish.serves}</Text>
          <Button
            variant="secondary"
            onClick={() => {
              onAdd(dish)
              onClose()
            }}
          >
            Adicionar ao carrinho - {formatPrice(dish.price)}
          </Button>
        </div>
      </ModalContent>
    </Overlay>
  )
}

export default ProductModal
