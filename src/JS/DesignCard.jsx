import React, { memo, useCallback } from 'react'

const DesignCard = memo(({ card, index, isActive, onCardClick, onViewFull }) => {
  const handleViewClick = useCallback((e) => {
    e.stopPropagation()
    onViewFull(e, card)
  }, [card, onViewFull])

  return (
    <div
      className={`expanding-card ${isActive ? 'active' : ''}`}
      onClick={() => onCardClick(index)}
      onContextMenu={(e) => e.preventDefault()}
      role="button"
      tabIndex={0}
      aria-label={`Design: ${card.title}`}
    >
      <img
        src={card.imageSrc || card.image}
        srcSet={card.imageSrcSet || undefined}
        sizes={card.imageSizes || undefined}
        alt={card.title || ''}
        className="card-bg"
        loading="lazy"
      />
      <h3 className="expanding-card-title">{card.title}</h3>

      {isActive && (
        <button
          className="view-full-button"
          onClick={handleViewClick}
          aria-label="View full image"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          View Full
        </button>
      )}
    </div>
  )
}, (prevProps, nextProps) => {
  // Custom comparator to avoid unnecessary re-renders
  const sameActive = prevProps.isActive === nextProps.isActive
  const sameId = prevProps.card.id === nextProps.card.id
  return sameActive && sameId
})

DesignCard.displayName = 'DesignCard'

export default DesignCard
