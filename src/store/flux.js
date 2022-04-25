export const getState = ({ setStore, getStore, getActions }) => {

    return {
        store: {
            category: "",
            items: [],
            total: [],
            valoritem: "",
            price: 0,
            valortot: 0,
            products: [],
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

            additems: (item1, item2, item3) => {
                const store = getStore();
                setStore({ products: store.products.concat({ producto: { name: item1, price: item2, imagepath: item3 }, cantidad: 1 })}, store.products)
                getActions().calcular()
            },

            calcular: () => {
                const store = getStore();
                let result = store.products.reduce((total, item) => total + (item.producto.price), 0)
                setStore({ valortot: store.valortot = result });
            },
            
            removerItem: (items, index) => {
                const store = getStore();
                const nuevalista = store.products.filter((item, indice) => {
                    if(indice === index){
                        setStore({ valortot: store.valortot - items.producto.price});
                    }
                    return indice !== index
                })
                
                setStore({ products: nuevalista })
            },
            changecategory: (item) => {
                const store = getStore();
                setStore({category: store.category = item})
            }


            /*store = {
                 items: [
                     {producto: { name: ‘Caja’, price: 100}, cantidad: 1},
                     {producto: { name: ‘Caja 2’, price: 150}, cantidad: 3}
                 ],
                 total: 0
             }
             addToCart(item)
             getActions().calcular()
             calcular = () => {
                 const store = getStore();
                 let result = store.items.reduce((total, item) => total + (item.producto.price * item.cantidad), 0)
                 setStore({ total: result});
             } 
 
 
             sumItems: (item1, item2) => {
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
          
        },
    };
};