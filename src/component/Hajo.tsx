import { HAJOLISTA, type HajoTipus } from '../adat';
import './Hajo.css'

interface HajoProps {
    hajom: HajoTipus;
}

export default function Hajo({ hajom }: HajoProps) {

    return (
        <>
            <div className="hajo">
                <h2>{hajom.nev}</h2>
                <p>Kapitány neve: {hajom.kapitany}</p>
                <p>Hajó színe: {hajom.szin}</p>
                <button>Kiválaszt</button>
            </div>
        </>  
    );
}