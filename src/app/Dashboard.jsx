function Dashboard() {
    function formatText(input) {
        return input.replace(/<br>/g, "<br/>").replace(/\n/g, "<br/>");
    }
    return (
        <>
            <div className='main-container col'>
                <div className='header'>
                </div>
                <div className='uploading-area row'>
                    <div className='main-upload'>Upload Documents</div>
                    <div className='image'><img /></div>
                </div>
                <div className='content row'>
                    <div className='sidebar col'>

                        <div className="search-bar">
                            <div className="image"><img /></div>
                            <div className="input-area">Search</div>
                        </div>
                        <div className='pdf-preview col'>
                            <div className='pdf-preview'>
                                <img src="" alt="" />
                                <div className='pdf-name'>Document 1</div>
                            </div>
                            <div className='pdf-preview col'>
                                <img src="" alt="" />
                                <div className='pdf-name'>Document 1</div>
                            </div>
                            <div className='notification row'>
                                <img src="" alt="" />
                                <div className='name'>Notifications</div>
                            </div>
                            <div className='support row'>
                                <img src="" alt="" />
                                <div className='name'>Support</div>
                            </div>
                            <div className='Settings row'>
                                <img src="" alt="" />
                                <div className='name'>Settings</div>
                            </div>
                        </div>
                    </div>
                    <div className='pdf-view'>
                        <div className='pdf-header'>
                            <div className='pdf-name'>Document 1 LALLAALL</div>
                            <div className='pdf-loader'></div>
                        </div>
                    </div>
                    <div className='text-area'></div>

                </div>
            </div>
        </>
    )
}

export default Dashboard
