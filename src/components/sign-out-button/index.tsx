import { useClerk } from '@clerk/clerk-react'
import { FC } from 'react'
import styles from 'src/components/sign-out-button/styles.module.css'

const SignOutButton: FC = () => {
  const { signOut } = useClerk()

  const handleSignOut = () => {
    signOut()
  }

  return (
    <button className={styles.sign_out_button} onClick={handleSignOut}>
      Sign Out
    </button>
  )
}

export default SignOutButton
