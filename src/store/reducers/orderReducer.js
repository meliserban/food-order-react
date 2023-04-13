export function orderReducer(state, action) {
    switch (action.type) {
        case 'add':
            // action.type === 'add' ise, action.amount kadar arttir,
            // action.amount yok ise varsayilan olarak 1 kullan
            return state + (action.amount || 1)
        case 'remove':
            // action.type === 'remove' ise, bir eksilt
            return state - 1
        default:
            // type gelmediyse, muhtemelen bir hata vardir ama javascriptin
            // patlayip sayfayi kilitlemesindense bir varsayilan aksiyon belirliyoruz
            // bu da state i hic degistirmeden geri donmek
            return state;
    }
}
