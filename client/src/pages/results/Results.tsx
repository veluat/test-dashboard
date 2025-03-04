import {Header} from '../../cmponents/header'
import {useParams} from 'react-router-dom'
import {TextLink} from '../../cmponents/textLink'
import {useTestData} from '../../hooks'
import {PageWrapper} from '../../cmponents/pageWrapper'

export const Results = () => {
  const {testId} = useParams<{ testId: string }>()
  const {test, loading, error} = useTestData(testId!)

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (!test) return <div>No test found</div>

  return (
    <PageWrapper>
      <Header heading={'Results'} subHeading={test?.name}/>
      <TextLink text={'Back'} to={'/'}/>
    </PageWrapper>
  )
}
