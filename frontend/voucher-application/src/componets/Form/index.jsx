import {useForm} from 'react-hook-form'
function Form(props){
    const {handleSubmit,register,formState: { errors }}=useForm()

    const submit=async(values)=>{
        console.log(values)
        const response=await fetch("http://localhost:3000/voucher/useVoucher",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(values)
        })
        let result=await response.json()
        console.log(result)
        if(result.message==='kod został zrealizowany poprawnie'){
            props.updateHandler(true,result.message)
            // setTimeout(()=>{
            //     props.updateHandler(false,false,'')
            // },1000)
        }else{
            props.updateHandler(false,result.message)
            // setTimeout(()=>{
            //     props.updateHandler(false,false,'')
            // },1000)
        }
        
    }

    return(<form className="form w-1/2 flex mx-auto flex-col mt-5 p-5 bg-cyan-600 rounded" onSubmit={handleSubmit(submit)}>
        <h1 className="mb-4"style={{fontSize:"3rem"}}>Formularz Zgłoszeniowy</h1>
        <label className="form-label text-2xl">Podaj kod</label>
        <input className="form-control w-1/2 self-center" {...register("voucherCode",{
                        required:{
                        value:true,
                        message:"Pole wymagane"
                        }})}></input>
        {errors.voucherCode&&<p className="text-red-600">{errors.voucherCode.message}</p>}

        <label className="form-label text-2xl mt-2">Podaj adres</label>
        <input className="form-control w-1/2 self-center" {...register("address",{
                        required:{
                        value:true,
                        message:"Pole wymagane"
                        }})}></input>
        {errors.address&&<p className="text-red-600">{errors.address.message}</p>}

        <label className="form-label text-2xl mt-2">Podaj miasto</label>
        <input className="form-control w-1/2 self-center" {...register("city",{
                        required:{
                        value:true,
                        message:"Pole wymagane"
                        }})}></input>
        {errors.city&&<p className="text-red-600">{errors.city.message}</p>}

        <label className="form-label text-2xl mt-2">Podaj kod pocztowy</label>
        <input className="form-control w-1/2 self-center" {...register("postalCode",{
                        required:{
                        value:true,
                        message:"Pole wymagane"
                        }})}></input>
        {errors.postalCode&&<p className="text-red-600">{errors.postalCode.message}</p>}

        <label className="form-label text-2xl mt-2">Podaj kraj</label>
        <input className="form-control w-1/2 self-center" {...register("country",{
                        required:{
                        value:true,
                        message:"Pole wymagane"
                        }})}></input>
        {errors.country&&<p className="text-red-600">{errors.country.message}</p>}

        <button className="btn btn-primary w-1/2 self-center text-2xl" type='submit'>Prześlij Formularz</button>
    </form>)
}

export default Form;