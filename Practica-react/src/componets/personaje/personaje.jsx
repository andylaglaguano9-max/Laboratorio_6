import PropTypes from 'prop-types'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import styles from './personaje-card.module.css'

export const PersonajeCard = ({ imagen, nombre, especie }) => {
  return (
    <Card className={styles.card} elevation={0}>
      <CardMedia
        component="img"
        className={styles.media}
        image={imagen}
        alt={nombre}
      />

      <CardContent className={styles.content}>
        <Typography className={styles.title} variant="h6" component="h3">
          {nombre}
        </Typography>

        <Typography className={styles.species} variant="body2">
          Especie: {especie}
        </Typography>

        <Stack className={styles.actions}>
          <Button className={styles.button} variant="outlined" size="small">
            Ver personaje
          </Button>
        </Stack>
      </CardContent>
    </Card>
  )
}

PersonajeCard.propTypes = {
  imagen: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  especie: PropTypes.string.isRequired,
}