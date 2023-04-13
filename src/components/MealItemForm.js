import Input from './Input.js';
import classes from '../styles/MealItemForm.module.css';
import {useOrderStore} from "../store";

const MealItemForm = props => {
    // orderStore icerisindeki inc fonksionumuzu bu componentte incCart adiyla kullaniyoruz
    // incCart fonksiyonu her calistirildiginda, aslinda oluşturduğumuz storedaki `inc` fonskiyonu calisacaktir
    // src/store/orderStore.js
    const incCart = useOrderStore((state) => state.inc)

    const buttonClickHandler = (e) => {
        // form kullanmak react uygulamalarinda cok sık rastlanan bir durum degil, gerek te yok
        // tüm form işlemleri react ve javascript kullanarak yapilabilinir.
        // formun varsayilan aksiyonu sayfayi yeniliyor, bunu istemedigimiz icin buttona tikladigimizda
        // varsayilani engelleyen e.preventDefault() u çalıştırıyoruz, böylece sayfa gereksiz yenilenmiyor.
        e.preventDefault();

        // incCart(1), incCart(2) gibi istedigin miktarda arttirmak icin de kullanilabilir. Bunun için
        // öncelikle inputdaki degeri bir statede tutup, buraya eklemen gerekecek.
        incCart()
    }

    return (
    <form className={classes.form}>
        <Input
            label='Amount'
            input={{
                id: 'amount_' + props.id, // this changed!
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1',
            }}
        />
        <button onClick={buttonClickHandler}>+ Add</button>
    </form>
    );
};

export default MealItemForm;