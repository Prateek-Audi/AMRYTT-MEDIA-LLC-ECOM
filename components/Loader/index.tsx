import React from 'react'

const Loader: React.FC = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="loader p-4 rounded-lg">
            <div 
              className="spinner border-4 border-t-4 border-gray-200 
              rounded-full w-12 h-12 animate-spin"
              style={{ borderTopColor: '#318531' }}
            />
          </div>
        </div>
    );
}

export default Loader;