
import { formatPrice } from '../data'
import {
  Overlay,
  ModalBox,
  CloseButton,
  Button,
} from '../styles/components'

function ProductModal({ dish, onClose, onAdd }) {
  if (!dish) return null

  return (
    <Overlay onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <ModalBox
        role="dialog"
        aria-modal="true"
        aria-label={`Detalhes de ${dish.name}`}
      >
        <CloseButton onClick={onClose} aria-label="Fechar">
          ×
        </CloseButton>

        <img src={dish.image} alt={dish.name} />

        <div>
          <h2>{dish.name}</h2>
          <p>{dish.description}</p>
          <p>{dish.serves}</p>

          <Button
            onClick={() => {
              onAdd(dish)
              onClose()
            }}
          >
            Adicionar ao carrinho - {formatPrice(dish.price)}
          </Button>
        </div>
      </ModalBox>
    </Overlay>
  )
}

export default ProductModal
