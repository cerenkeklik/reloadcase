import classNames from 'classnames'
import "../../assets/css/General.css"

const ProfilePicture = ({ userFirstLetter }: { userFirstLetter: string }) => {
  return (
    <div
      className={classNames('user-first-letter-comp', {
        'bg-b6fbfd': (userFirstLetter === 'C')
      })}
    >
      {userFirstLetter}
    </div>
  )
}
export default ProfilePicture
