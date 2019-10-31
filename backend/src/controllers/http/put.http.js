const updateResource = async (req, res, model, statusNumber ) => {
  try {
    const { id } = req.params
    const { body } = req
    console.log(id)
    console.log(body)
    const updatedResource = await model.findByIdAndUpdate(id, body, { new: true })

    return res.json(updatedResource);

  } catch (error) {
    return res.status(statusNumber).json({
      ok: false,
      error
    })
  }
}

module.exports = {
  updateResource
}

