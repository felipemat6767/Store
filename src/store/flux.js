export const getState = ({ setStore, getStore, getActions }) => {

    return {
        store: {
            items: [],
            total: [],
            valortot: 0,
            valoract:0
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
            
            restaritems:(item)=> {
                const store = getStore();
                setStore({ valortot: store.valortot -= item })
            },

            sumItems: (item1, item2) => {
                const store = getStore();
                setStore({ total: store.total.concat(item1 + ": " + item2) })
                setStore({ valortot: store.valortot += item2 })
    
            },
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