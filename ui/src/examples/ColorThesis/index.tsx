import './index.scss'

export function ColorThesis() {
  return (
    <div className="wl-color-thesis">
      <div className="wl-color-thesis__light">
        <h2>Light Theme</h2>
        <div className="wl-color-thesis__example wl-color-thesis__white">
          White -
          {' '}
          <span className="wl-color-thesis__light-text">light text</span>
        </div>
        <div className="wl-color-thesis__example wl-color-thesis__grey-8">Grey 8</div>
        <div className="wl-color-thesis__example wl-color-thesis__grey-6">Grey 6 - Page Background</div>
        <div className="wl-color-thesis__example wl-color-thesis__grey-4">Grey 4 - Border Color</div>
        <div className="wl-color-thesis__example wl-color-thesis__black">Black</div>
        <div className="wl-color-thesis__example wl-color-thesis__primary">Primary</div>
      </div>

      <div className="wl-color-thesis__dark">
        <h2>Dark Theme</h2>
        <div className="wl-color-thesis__example wl-color-thesis__white">
          White -
          {' '}
          <span className="wl-color-thesis__light-text">light text</span>
        </div>
        <div className="wl-color-thesis__example wl-color-thesis__grey-8">Grey 8</div>
        <div className="wl-color-thesis__example wl-color-thesis__grey-6">Grey 6 - Page Background</div>
        <div className="wl-color-thesis__example wl-color-thesis__grey-4">Grey 4 - Border Color</div>
        <div className="wl-color-thesis__example wl-color-thesis__black">Black</div>
        <div className="wl-color-thesis__example wl-color-thesis__primary">Primary</div>
      </div>
    </div>
  )
}
