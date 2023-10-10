import QRCode from 'qrcode.react';
interface QRProps {
    url: string
}

const QR = ({url} : QRProps) => {
    return (
        <QRCode value={url} size={150}/>
    );
}

export default QR;