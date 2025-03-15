import React from 'react'

export default function DashBoardLayout({ children }) {
    return (
        <div>
            <div className='grid grid-cols-12'>
                <div className='col-span-3'>
                    <ul><li>user list</li></ul>
                </div>
                <div className='col-span-9'>
                    {children}
                </div>
            </div>

        </div>
    )
}
