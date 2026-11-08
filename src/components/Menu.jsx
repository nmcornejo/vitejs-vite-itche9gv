import React from 'react';

export default function Menu({ setPage, userRole, onLogout }) {
  const isFinanzas = userRole === 'Finanzas';

  return (
    <nav
      style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '1rem' }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <h2 style={{ margin: 0, fontSize: '18px' }}>SGC ONG - IJM</h2>
          <span
            style={{
              background: '#3b82f6',
              fontSize: '11px',
              padding: '2px 8px',
              borderRadius: '12px',
              fontWeight: 'bold',
            }}
          >
            Rol: {userRole}
          </span>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <button onClick={() => setPage('dashboard')} style={buttonStyle}>
            {isFinanzas ? 'Dashboard Global' : 'Mi Dashboard'}
          </button>

          <button onClick={() => setPage('solicitudes')} style={buttonStyle}>
            Solicitudes de Avance
          </button>

          <button onClick={() => setPage('reembolsos')} style={buttonStyle}>
            Reembolsos
          </button>

          {/* Exclusivo Finanzas */}
          {isFinanzas && (
            <>
              <button
                onClick={() => setPage('revision')}
                style={{
                  ...buttonStyle,
                  background: '#2563eb',
                  padding: '4px 8px',
                  borderRadius: '4px',
                }}
              >
                🔍 Bandeja de Revisión
              </button>
              <button onClick={() => setPage('catalogos')} style={buttonStyle}>Catálogos</button>
              <button onClick={() => setPage('usuarios')} style={buttonStyle}>
                Usuarios
              </button>
              <button onClick={() => setPage('reportes')} style={buttonStyle}>
                Reportes PDF
              </button>
              <button onClick={() => setPage('bitacora')} style={buttonStyle}>
                Bitácora
              </button>
            </>
          )}

          <button
            onClick={onLogout}
            style={{
              ...buttonStyle,
              backgroundColor: '#dc2626',
              padding: '4px 8px',
              borderRadius: '4px',
            }}
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
    </nav>
  );
}

const buttonStyle = {
  background: 'none',
  border: 'none',
  color: 'white',
  cursor: 'pointer',
  fontSize: '13px',
  fontWeight: 'bold',
};
