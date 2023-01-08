const express = require("express");
const router = express.Router({ mergeParams: true });

const { reviewSchema } = require("../schemas.js");

const catchAsync = require("../utils/catchAsync");
const ExpressError = require("../utils/ExpressError");

const Campground = require("../models/campground");
const review = require("../models/review");
const Review = require("../models/review");
const { validateReview, isLoggedin, isReviewAuthor } = require("../middleware");
const reviews = require("../controllers/reviews");

router.post("/", isLoggedin, validateReview, catchAsync(reviews.createReview));

router.delete("/:reviewid", isLoggedin, catchAsync(reviews.deleteReview));

module.exports = router;
