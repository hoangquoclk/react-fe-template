import { useNavigate } from 'react-router-dom'
import { RiEmotionUnhappyLine } from 'react-icons/ri'
import { Button, Typography } from 'antd'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col justify-center h-screen text-center items-center gap-4">
      <RiEmotionUnhappyLine fontSize={300} />

      <Typography className={'text-6xl'}>404</Typography>
      <Typography className={'text-6xl'}>PAGE NOT FOUND</Typography>
      <Typography className={'text-xl font-thin'}>
        Sorry, the page you’re looking for does not exist. It may have been moved or deleted.
      </Typography>

      <Button onClick={() => navigate('/')}>Go Home</Button>
    </div>
  )
}

export default NotFound
