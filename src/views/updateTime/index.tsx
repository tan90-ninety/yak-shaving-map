import { useEffect, useState } from "react"
import { pathPrefix } from "../../utils/config"

export default function UpdateTime() {
    const [lastUpdateTime, setLastUpdateTime] = useState<string>()
    useEffect(() => {
        getLastCommitInfo()
    }, [])

    async function getLastCommitInfo() {
        const res = await fetch(pathPrefix + '/commitInfo.json')
        const data = await res.json()
        setLastUpdateTime(data.commitDate)
    }

    // Starting from July 29th, 2025
    return (<>
        <span style={{
            position: 'absolute',
            right: '20px',
            bottom: '20px',
            color: 'rgb(152, 152, 159)',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: 500,
            letterSpacing: 'normal',
            orphans: 2,
            textAlign: 'start',
            widows: 2,
            wordSpacing: '0px'
        }}>
            Last updated:
            <time dateTime={lastUpdateTime}>
                {lastUpdateTime?.slice(0,-6)}
            </time>
        </span>
    </>)
}