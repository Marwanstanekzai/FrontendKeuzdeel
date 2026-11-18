
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  // Haal de categorieën op met de Fetch API
  useEffect(() => {
    fetch('/categories.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Data kon niet worden opgehaald')
        }

        return response.json()
      })
      .then((data) => {
        setCategories(data)
        setLoading(false)
      })
      .catch((error) => {
        setError(error.message)
        setLoading(false)
      })
  }, [])

  return (
    <div className="website">

      {/* Navigatie */}
      <header className="header">
        <nav className="navbar">
          <h2>Florist</h2>

          <ul className={menuOpen ? 'show-menu' : ''}>
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
           <li><a href="#categories" onClick={() => setMenuOpen(false)}>Roses</a></li>
            <li><a href="#categories" onClick={() => setMenuOpen(false)}>Bouquets</a></li>
            <li><a href="#categories" onClick={() => setMenuOpen(false)}>Plants</a></li>
            <li><a href="#shop" onClick={() => setMenuOpen(false)}>Gifts</a></li>
            <li><a href="#shop" onClick={() => setMenuOpen(false)}>Location</a></li>
          </ul>

          <button
            className="menu-button"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </nav>
      </header>

      <main>

        {/* Hero */}
        <section className="hero" id="home">
          <div className="hero-content">
            <h1>Fresh Flowers, Thoughtfully Arranged</h1>

            <p>
              Seasonal blooms crafted for everyday moments and meaningful
              occasions. Sourced responsibly and arranged with care.
            </p>

            <a href="#categories" className="hero-button">
              Shop Flowers
            </a>
          </div>

          <div className="hero-image">
            <img
              src="/images/hero.jpg"
              alt="Mensen met een bloemenboeket"
            />
          </div>
        </section>

        {/* Categorieën ophalen met Fetch */}
        <section className="categories" id="categories">

          {loading && <p>Categories worden geladen...</p>}

          {error && <p className="error">{error}</p>}

          {!loading && !error && categories.map((category) => (
            <div className="category-card" key={category.id}>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </div>
          ))}

        </section>

        {/* Winkel */}
        <section className="shop" id="shop">
          <div className="shop-image">
            <img
              src="/images/shop.jpg"
              alt="Onze bloemenwinkel"
            />
          </div>

          <div className="shop-content">
            <h2>Visit Our Shop</h2>

            <p>123 Flower Street</p>
            <p>Garden District</p>
            <p>Bloomtown, BT 45678</p>

            <br />

            <p>Open Monday to Saturday</p>
            <p>9:00 AM – 6:00 PM</p>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="footer">
        <a href="#home">Instagram</a>
        <a href="#home">Facebook</a>
        <a href="#home">Pinterest</a>
        <a href="#home">Twitter</a>
      </footer>

    </div>
  )
}

export default App
