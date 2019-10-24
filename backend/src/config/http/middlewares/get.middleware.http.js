const getResourceById = async (req, res, model, statusNumber) => {
  try {
    const { id } = req.params
    const source = await model.findById(id)

    return res.json(source)

  } catch (error) {
    
    return res.status(statusNumber).json({
      ok: false,
      error
    })
  }
}

module.exports = {
  getResourceById
}