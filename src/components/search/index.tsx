import React, { FC } from 'react'
import styles from 'src/components/search/styles.module.css'
import { useSearchContext } from 'src/context/search-provider'
import SearchIcon from 'src/assets/icons/search1.svg'

const Search: FC = () => {
  const { search, setSearch } = useSearchContext()

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setSearch(value)
  }

  return (
    <div className={styles.search_form}>
      <input
        className={styles.search_input}
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search..."
      />
      <img src={SearchIcon} alt="search icon" className={styles.search_icon} />
    </div>
  )
}

export default Search
