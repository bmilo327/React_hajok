import { type HajoTipus } from "../adat";
import Hajo from "./Hajo";

interface HajoListaProps {
    lista:HajoTipus[]
}

export default function Hajok({lista}:HajoListaProps) {       
    return (
        <>
            {
                lista.map((e, i) => {
                    return <Hajo hajom={e} key={i} />
                })
            }
        </>
    );
}