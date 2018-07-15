function onlineShop(selector) {
    let form = `<div id="header">Online Shop Inventory</div>
    <div class="block">
        <label class="field">Product details:</label>
        <br>
        <input placeholder="Enter product" class="custom-select">
        <input class="input1" id="price" type="number" min="1" max="999999" value="1"><label class="text">BGN</label>
        <input class="input1" id="quantity" type="number" min="1" value="1"><label class="text">Qty.</label>
        <button id="submit" class="button" disabled>Submit</button>
        <br><br>
        <label class="field">Inventory:</label>
        <br>
        <ul class="display">
        </ul>
        <br>
        <label class="field">Capacity:</label><input id="capacity" readonly>
        <label class="field">(maximum capacity is 150 items.)</label>
        <br>
        <label class="field">Price:</label><input id="sum" readonly>
        <label class="field">BGN</label>
    </div>`;
    $(selector).html(form);
    // Write your code here
    $(".custom-select").on('change', function () {
        // console.log(submitVal);
        let submVal = $(".custom-select").val();
        // console.log(submVal);
        // if (submVal !== '') {
        $("#submit").prop('disabled', false)
        // }
    });
    let totalPrice = 0;
    let capacity = 0;
    $('#submit').on('click', function () {
        // console.log('sdaaaa');
        let prodName = $(".custom-select").val();
        let price = $('#price').val();
        let quantity = $('#quantity').val();
        // console.log(prodName);
        // console.log(price);
        // console.log(quantity);
        totalPrice += Number(price);
        capacity += Number(quantity);
        $(".custom-select").val('');
        $('#price').val('1');
        $('#quantity').val('1');
        $("#submit").prop('disabled', true);

        if (capacity < 150) {
            $('.display').append($(`<li>Product: ${prodName} Price: ${price} Quantity: ${quantity}</li>`))
            $('#sum').val(`${totalPrice}`);
            $('#capacity').val(`${capacity}`);

            //for 80-100/100
            // if (capacity===150){
            //     $('#capacity').addClass('fullCapacity').val('full');
            //     $(".custom-select").prop('disabled', true);
            //     $("#price").prop('disabled', true);
            //     $("#quantity").prop('disabled', true);
            // }

        } else if (capacity >= 150) {

            $('#capacity').addClass('fullCapacity').val('full');
            $(".custom-select").prop('disabled', true);
            $("#price").prop('disabled', true);
            $("#quantity").prop('disabled', true);

        }
    })
}
