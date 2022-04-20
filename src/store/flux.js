export const getState = ({ setStore, getStore, getActions }) => {

    return {
        store: {
            items: [],
            total: [],
            valoritem: "",
            price: 0,
            valortot:0,
           
        },

        actions: {
            getItem: (item) => {
                const store = getStore();
                setStore({ items: store.items })
            },
            getTotal: (price) => {
                const store = getStore();
                setStore({ total: store.total })
            },
            
            additems: (item) => {
                const store = getStore();
                setStore({ valoritem: store.valoritem = item })
            },

            addPrice:(price) => {
                const store = getStore();
                setStore({ price: store.price = price})
            },

            getAct: (item1, item2) => {
                const action = getActions()
                action.additems(item1)
                action.addPrice(item2)
                const store = getStore();
                setStore({total: store.total.concat(store.valoritem + ": " + parseInt(store.price))})
                setStore({result: store.result.text = item1})
                
            },

           


            /*sumItems: (item1, item2) => {
                const store = getStore();
                setStore({ total: store.total.concat(item1) })
                setStore({ valortot: store.valortot += item2 })

            },
              removerItem: (items, index) => {
                const store = getStore();
                const nuevalista = store.total.filter((item, indice) => {
                    return indice !== index
                })
                setStore({ total: nuevalista })
            }*/
            removerItem: (items, index) => {
                const store = getStore();
                const nuevalista = store.total.filter((item, indice) => {
                    return indice !== index
                })
                setStore({ total: nuevalista })
            }
        },
    };
};