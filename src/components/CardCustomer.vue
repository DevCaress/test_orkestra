<template >
    <div class="card">
        <div class="customer_info">
            <div class="name">
                {{customer.name}}
            </div>
            <div class="email">
                {{customer.email}}
            </div>
        </div>
        <div class="customer_cont">
            <div class="data df-center fw">

                <div class="phone">
                    <div class="title">Celular</div>
                    <div class="value">

                        {{customer.cellphone_format ? customer.cellphone_format : 'N/D'}} 

                        <svg v-if="customer.verified_cellphone != 0" class="check" 
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z"/></svg>
                        
                        <svg v-if="customer.cliente_repetido != 0" class="warning" 
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg>
                    </div>
                </div>

                <div class="ticket">
                    <div class="title">Ticket más alto</div>
                    <div class="value">
                        {{customer.highest_ticket_amount_format ? 
                        customer.highest_ticket_amount_format : 'N/D'}}
                    </div>
                </div>

                <div class="period">
                    <div class="title">Periodo sin compra</div>
                    <div class="value">{{customer.period_without_purchase_human_format}}</div>
                </div>

                <div class="lcontac">
                    <div class="title">Último contacto</div>
                    <div class="value">
                        <svg 
                        v-if="customer.last_contact ?
                        customer.last_contact.last_contact_diff_months > 2 : null" 
                        
                        xmlns="http://www.w3.org/2000/svg" class="exclamation" viewBox="0 0 16 16">
                            <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                        </svg>
                        {{ customer.last_contact ? 
                        customer.last_contact.last_contact_human_format : 'N/D'}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CardCustomer',
    props: ['customer'],
}
</script>
<style lang="scss" src="../scss/main.scss">
</style>