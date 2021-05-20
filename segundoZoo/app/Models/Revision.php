<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Revision extends Model
{
    use HasFactory;
    protected $table = "revisiones";

  //  public $timestamps = false;

    public function animal() {
        return $this->belongsTo(Animal::class);
    }

}