//Import Bio Model
Bio = require('./bioModel');

//For index
exports.index = function (req, res) {
    Bio.get(function (err, bio) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            status: "success",
            message: "Got Bio Successfully!",
            data: bio       
        });
    });
};

//For creating new bio
exports.add = function (req, res) {
    var bio = new Bio();
    bio.FirstName = req.body.FirstName? req.body.FirstName: bio.FirstName;
    bio.LastName = req.body.LastName? req.body.LastName: bio.LastName;
    bio.Email = req.body.Email;
    bio.Phone = req.body.Phone;
    bio.Qualification = req.body.Qualification;
    bio.PassOut = req.body.PassOut;
    bio.Institute = req.body.Institute;
    bio.YearofExperience= req.body.YearofExperience;
    bio.Technical = req.body.Technical;

    //Save and check error
    bio.save(function (err) {
        if(bio.FirstName="")
            res.json(err);
    
        if (err)
            res.json(err);
        
        res.json({
            message: "New Bio Added!",
            data: bio
        });
    });
};

// View Bio
exports.view = function (req, res) {
    Bio.findById(req.params.bio_id, function (err, bio) {
        if (err)
            res.send(err);
        res.json({
            message: 'Bio Details',
            data: bio
        });
    });
};

// Update Bio
exports.update = function (req, res) {
    Bio.findById(req.params.bio_id, function (err, bio) {
        if (err)
            res.send(err);
        bio.FirstName = req.body.FirstName ? req.body.FirstName : bio.FirstName;
        bio.LastName = req.body.LastName ? req.body.LastName : bio.LastName;
        bio.Email = req.body.Email;
        bio.Phone = req.body.Phone;
        bio.Qualification = req.body.Qualification;
        bio.PassOut = req.body.PassOut;
        bio.Institute = req.body.Institute;
        bio.YearofExperience = req.body.YearofExperience;
        bio.Technical = req.body.Technical;

        //save and check errors
        bio.save(function (err) {
            if (err)
                res.json(err)
            res.json({
                message: "Bio Updated Successfully",
                data: bio
            });
        });
    });
};

// Delete Bio
exports.delete = function (req, res) {
    Bio.deleteOne({
        _id: req.params.bio_id
    }, function (err, contact) {
        if (err)
            res.send(err)
        res.json({
            status: "success",
            message: 'Bio Deleted'
        });
    });
};  