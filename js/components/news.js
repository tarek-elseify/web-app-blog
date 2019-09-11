function news(id) {

    /* inject the content into the page */
    /*                                  */
    var content = `
      <div class="row">
	<div class="column-3">
	  <img src="images/news-1.jpg">
	</div>
	<div class="column-6">
	  <h2>
	    UPS Introduces Hybrid, Long-Range Trucks That
	    Change Modes Based on Where They Are
	  </h2>
	  
	  <p>
	    UPS is introducing 15 new vehicles to its U.K. fleet that offer
	    extended driving range versus traditional EVs, but that are also
	    capable of operating in fully electric mode when required to do so,
	    as in emission-free zones and dense city cores. The trucks, developed
	    in partnership with commercial electric vehicle tech startup Tevva,
	    can switch between hybrid and fully electric modes for a total range
	    of up to 400km (~250 miles), with the same cargo carrying capacity of
	    same-sized, diesel-powered trucks.
	  </p>

	  <span class="read-more">
	    <a href="#">Read More</a>
	  </span>

	</div>
	
      </div>
      
      <div class="row">
	<div class="column-3">
	  <img src="images/news-2.jpg">
	</div>
	<div class="column-6">
	  <h2>
	    Reach Robotics is closing up shop
	  </h2>
	  
	  <p>
	    Reach Robotics, the company behind the spider-like MekaMon robot you might've seen
	    on the shelves at the Apple Store, is closing down.
	    Billed as the &quot;world's first gaming robot,&quot; MekaMon is part video game, part
	    STEM tool. You could plop it down on the carpet and point your phone at it to
	    battle virtual augmented reality enemies, face off against other MekaMon owners
	    in multiplayer battles or build custom programs for the robot on top of Apple's
	    Swift Playgrounds.
	  </p>

	  <span class="read-more">
	    <a href="#">Read More</a>
	  </span>

	</div>


      </div>

      <div class="row">
	<div class="column-3">
	  <img src="images/news-3.jpg">
	</div>
	<div class="column-6">
	  <h2>
	    Will This Tech Close on Never-Ending Real Estate
	    Waiting Periods?
	  </h2>
	  
	  <p>
	    The most anticipated part of every real estate transaction
	    is being done with it. Every seller looks forward to the
	    moment of closing: the period where all involved parties put
	    a bow on the sale and the keys get handed over to the happy
	    new owners. The closing is by nature the most complicated part
	    of the proceedings. The task of tying together every loose end
	    and officially sealing the deal can end up dragging on and on,
	    a proceeding somewhat at odds with today's lightning-paced business
	    environment. There's also the fact that, for an everyday homebuyer
	    unaccustomed to the ins and outs of real estate purchases, the
	    process shuts them out and leaves them waiting.
	  </p>

	  <span class="read-more">
	    <a href="#">Read More</a>
	  </span>
	  
	</div>

      </div>`;
    document.getElementById(id).innerHTML = content;
}
