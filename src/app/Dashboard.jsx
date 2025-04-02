

import './globals.css'

function Dashboard() {


    return (
        <>
            <div className='main-container col'>
                <div className='header'>
                </div>
                <div className='content row'>
                    <div className='sidebar col'>
                        <div className='uploading-area row'>
                            <div className='main-upload'></div>
                            <div className='image'></div>
                        </div>
                        <div className='pdf-preview col'>
                            <div className='pdf-preview'></div>
                            <div className='pdf-preview'></div>
                        </div>
                    </div>



                    <div className='pdf-view'></div>

                    <div className='text-area'></div>

                </div>
            </div>
        </>
    )
}

export default Dashboard
