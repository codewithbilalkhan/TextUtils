import React from 'react'

function Alerts(props) {
  if (!props.alert) {
    return null;
  }
  return (
    <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{props.alert.msg}</strong>
    <button
    type="button"
    className="btn-close"
    onClick={() => props.onClose && props.onClose()}
    />
    </div>
  )
}

export default Alerts