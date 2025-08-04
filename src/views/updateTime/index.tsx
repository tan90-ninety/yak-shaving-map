import { useEffect, useState } from "react"
import { pathPrefix } from "../../common/config.ts"

export default function UpdateTime() {
    const [lastUpdateTime, setLastUpdateTime] = useState('')
    useEffect(() => {
        getLastCommitInfo()
    }, [])

    const [isGitHub, setIsGitHub] = useState(false)

    async function getLastCommitInfo() {
        const res = await fetch(pathPrefix + '/commitInfo.json')
        if (res.headers.get('server') && res.headers.get('server') === 'GitHub.com') {
            const data = await res.json()
            setLastUpdateTime(data.commitDate)
            setIsGitHub(true)
        } else {
            setIsGitHub(false)
        }
    }

    return (<>
        {isGitHub && (<span style={{
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
                {lastUpdateTime.slice(0, -6)}
            </time>
        </span>)}
    </>)
}