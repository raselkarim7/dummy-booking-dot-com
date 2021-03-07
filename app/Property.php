<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Property extends Model
{
    public function photos() {
        return $this->hasMany(Photo::class,'property_id');
     }
}
