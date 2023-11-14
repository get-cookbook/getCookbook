export default function Wuzdiz(){
    const bgStyles = {
        div: {
            position: 'absolute',
            width: '100%',
            overflowX: 'hidden',
        }
    };
    return(
        <div style={{...bgStyles.div , top: '1200px'}} className="pl-16">
            <h2 className="font-bold text-9xl"> What&apos;s <span className="text-orange-500">this?</span></h2>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <p className="text-3xl text-center">get(cookBook) is a community powered recipe repository! Anurag will tell u more ( •̀ ω •́ )y </p>
        </div>
    )
}