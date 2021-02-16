import React from 'react'
import Icon from '../../atoms/Icon'

const icons = ['facebook', 'instagram', 'twitter', 'linkedin', 'youtube']

const HomeIcons = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      {icons.map(icon => (
        <Icon
          iconKey={icon} 
          key={icon} 
          isSmall 
          isFill
        />
      ))}
    </div>
  )
}

export default React.memo(HomeIcons)
