import React from 'react';
import './topbar.css';
import { Analytics, TableChart } from '@mui/icons-material';

function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topbarLeft">
                    <span className="logo">Clos Ansible Deployment</span>
                </div>
                <div className="topbarRight">
                    <div className="topbarIconContainer">
                        <Analytics />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <TableChart />
                        <span className="topbarIconBadge">2</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Topbar;