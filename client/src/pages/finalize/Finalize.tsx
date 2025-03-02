import {Header} from '../../cmponents/header'
import {useParams} from 'react-router-dom'
import {TextLink} from '../../cmponents/textLink'
import styles from './Finalize.module.scss'
import {useTestData} from '../../hooks'

export const Finalize = () => {
  const {testId} = useParams<{ testId: string }>()
  const {test, loading, error} = useTestData(testId!)

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (!test) return <div>No test found</div>

  return (
    <div className={styles.root}>
      <Header heading={'Finalize'} subHeading={test?.name}/>
      <TextLink text={'Back'} to={'/'}/>
    </div>
  )
}
