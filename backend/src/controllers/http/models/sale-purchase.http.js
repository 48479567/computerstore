const { Product } = require('../../../models')

const createSalePurchase = async (req, res, model, statusNumber, selection) => {
    try {
      const { body } = req
      const source = new model(body)
      const saveSource = await source.save()

      body.products.forEach(p => {
          console.log(p)
          Product.findByIdAndUpdate(p.productid,
            { $inc: { 
                quantity: -p.quantity * selection.operation, 
                [selection.selector]: p[`${selection.selector}price`]
            }}, { new: true }).then()
      })
  
      return res.json(saveSource)
  
    } catch (error) {
  
      return res.status(statusNumber).json({
        ok: false,
        error
      })
    }	
}
  
  
module.exports = {
createSalePurchase
}
  